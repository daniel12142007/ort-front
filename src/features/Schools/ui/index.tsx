import { DetailName, Image, NavBlock, SearchInput } from "@/features/Users/style/style";
import searchSVG from "../../../shared/assets/svg/search.svg"
import PenSVG from "../../../shared/assets/svg/pen.svg"
import DeleteSVG from "../../../shared/assets/svg/delete.svg"
import { AddBtn, Dashboard, Flexing, MainBlock, NamesBlock, ActiveBlock, Update, School, Name, Area } from "../style"
import { Modal } from "./modal";
import { useEffect, useState } from "react";
import { useSchoolsStore } from "../model/store";
import { SchoolRes } from "../type";

export const Schools = () => {
    const { fetchSchools, schools, deleteSchool, } = useSchoolsStore()
    const [ open, setOpen ] = useState(false)
    const [schoolToUpdate, setSchoolToUpdate] = useState<SchoolRes | null>(null);
    const handleOpen = () => setOpen(true)
    const handleDelete = async (id: number) => {
        await deleteSchool(id)
    }
    const handleUpdate = (school: SchoolRes) => {
        setSchoolToUpdate(school)
        setOpen(true)
    }

    useEffect(() => {
        fetchSchools()
    }, [fetchSchools])
    return <MainBlock>
        <Flexing>
            <NavBlock>
                <SearchInput placeholder="Поиск школы"/>
                <Image src={searchSVG}/>
            </NavBlock>
            <AddBtn onClick={handleOpen}>Добавить +</AddBtn>
        </Flexing>
        <Dashboard>
            <NamesBlock>
                <DetailName>Школы</DetailName>
                <DetailName>Районы</DetailName>
                <DetailName>Действия</DetailName>
            </NamesBlock>
            <School>
                {schools.map((x) => (
                    <div key={x.id}>
                        <ActiveBlock>
                            <Name>{x.name}</Name>
                            <Area>{x.district}</Area>
                            <Update>
                                <Image onClick={() => handleUpdate(x)} src={PenSVG}/>
                                <Image onClick={() => handleDelete(x.id)} src={DeleteSVG}/>
                            </Update>
                        </ActiveBlock>
                    </div>
                ))}
            </School>
        </Dashboard>
        {open && <Modal setSchool={setSchoolToUpdate} schoolToUpdate={schoolToUpdate} setOpen={setOpen}/>}
    </MainBlock>;
}