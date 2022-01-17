// import {useState} from "react";
// import BasicTextFields from "./inputMUI";
//
// const SearchForm = ({onSubmit}) => {
//     const [searchQuery, setSearchQuery] = useState('')
//
//     return (
//         <>
//             <form onSubmit={(e) => {
//                 onSubmit(e, searchQuery)
//                 setSearchQuery('')
//             }}>
//                 <input onChange={(e) => setSearchQuery(e.target.value)}
//                        value={searchQuery} placeholder='enter the city'/>
//                 {/*<button type='submit'>Search</button>*/}
//             </form>
//             <BasicTextFields/></>
//
//     )
// }
//
// export default SearchForm