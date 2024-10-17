import React from "react"


export const useHandleFile = () => {
    const [resizedFile, setResizedFile] = React.useState<File>()
    const [resizedUrl, setResizedUrl] = React.useState<string | null>(null)

    const resizeImage = (file: File): Promise<File | null> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;

                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");

                    const width = img.width;
                    const height = img.height;

                    canvas.width = width;
                    canvas.height = height;
                    ctx?.drawImage(img, 0, 0, width, height);

                    const compressImage = (quality: number) => {
                        return new Promise<Blob | null>((res) => {
                            canvas.toBlob(
                                (blob) => {
                                    res(blob);
                                },
                                "image/jpeg",
                                quality
                            );
                        });
                    };

                    const compressUntilSize = async () => {
                        let quality = 1.0; // Начинаем с 100% качества
                        let blob: Blob | null = await compressImage(quality);
                        let iteration = 0; // Счетчик итераций

                        while (blob && blob.size > 1 * 1024 * 1024 && quality > 0.05) { // Устанавливаем предел на 1 МБ
                            quality -= 0.1; // Уменьшаем качество на 10%
                            if (iteration > 10) { // Ограничиваем количество итераций для предотвращения бесконечного цикла
                                break;
                            }
                            blob = await compressImage(quality);
                            iteration++;
                        }

                        if (blob && blob.size <= 1 * 1024 * 1024) { // Проверяем, если размер меньше или равен 1 МБ
                            resolve(new File([blob], file.name, { type: file.type }));
                        } else {
                            resolve(null);
                        }
                    };

                    compressUntilSize();
                };

                img.onerror = (err) => reject(err);
            };
        });
    };



    const handelFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0]
        if (file === undefined) return

        const compressedFile = await resizeImage(file)
        console.log(compressedFile)
        if (compressedFile) {
            setResizedFile(compressedFile)

            const url = URL.createObjectURL(compressedFile)
            setResizedUrl(url)
        }
    }

    return { resizedFile, resizedUrl, handelFile }
}
