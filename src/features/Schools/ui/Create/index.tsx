import { BackIcon, Button, Input, ModalBody, ModalContainer, ModalFooter, ModalHeader, ModalOverlay, Title, Label, AddButton } from "../../style";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useSchoolsStore } from "../../model/store";
import { useEffect, useState } from "react";
interface Props {
    setOpen: (open: boolean) => void;
    schoolToUpdate: any;
    setSchool: (school: any) => void;
}

export const Modal = ({setOpen, schoolToUpdate, setSchool, }: Props) => {
    const { postSchools, updateSchool } = useSchoolsStore()
    const [schoolData, setSchoolData] = useState({
        name: '',
        district: '',
    })

    useEffect(() => {
        if (schoolToUpdate) {
            setSchoolData({name: schoolToUpdate.name, district: schoolToUpdate.district});
        }else {
            setSchoolData({ name: '', district: '' });
        }
    },[schoolToUpdate])
    const handleClose = () => { 
        setOpen(false); 
        setSchool({ name: '', district: '' });
    }
    const handleSave = async () => {
        console.log("schoolToUpdate:", schoolToUpdate);
        console.log("schoolData:", schoolData);
        if (schoolToUpdate && schoolToUpdate.id) {
            await updateSchool({
                name: schoolData.name,
                district: schoolData.district,
                id: schoolToUpdate.id, 
            });
        } else {
            await postSchools({
                name: schoolData.name,
                district: schoolData.district,
            });
        }
        handleClose(); 
    };
    
    return (
        <>
            <ModalOverlay/>
            <ModalContainer>
                <ModalHeader>
                    <BackIcon onClick={handleClose}><KeyboardBackspaceIcon/></BackIcon>
                    <Title>Добавить школы</Title>
                </ModalHeader>
                <ModalBody>
                    <Label>Название школы</Label>
                    <Input value={schoolData.name} onChange={(e) => setSchoolData({...schoolData, name: e.target.value})}/>
                    <Label>Район школы</Label>
                    <Input value={schoolData.district} onChange={(e) => setSchoolData({...schoolData, district: e.target.value})}/>
                </ModalBody>
                <ModalFooter>
                    <AddButton onClick={() => handleSave()}>Сохранить</AddButton>
                    <Button onClick={handleClose}>Отменить</Button>
                </ModalFooter>
            </ModalContainer>
        </>
    );
};