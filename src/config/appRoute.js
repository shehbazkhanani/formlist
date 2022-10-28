import { BrowserRouter, Route, Routes } from "react-router-dom"

import Formlist from "../screen/FormList"
import Show from "../screen/show"

function Approute() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Formlist/>} />
            <Route path="show" element={<Show />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Approute