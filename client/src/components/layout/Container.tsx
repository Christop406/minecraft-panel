import { ParentComponent } from "solid-js";

export const Container: ParentComponent = (props) => {
    return <div class="container mx-auto p-3">
        {props.children}
    </div>
};