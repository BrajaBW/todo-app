import ControlledForm from "@/components/formComponents/controlledForm";
import UncontrolledForm from "@/components/formComponents/uncontrolled.form";

export default function FormPage()  {
    return(
        <main className="bg-black-300">
            <ControlledForm/>
            <UncontrolledForm/>
        </main>
 
    )
}