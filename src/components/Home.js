import React from "react"
import home from "../styles/Components.css"
import {form_group, form_field, form_label} from "../styles/Searchbar.css"

export default function Home() {
    return (
        <div className="home">
            <h1>Kurslitteratur för dig som pluggar Datateknik i Lund</h1>

            <div className="form_group">
                <input className="form_field" type="text" onKeyUp={console.log("hej")} id="coursecode" name="coursecode" placeholder="Sök efter kurskod"></input>
                <label for="coursecode" className="form_label">Sök efter kurskod</label>
            </div>

        </div>
    );
}
