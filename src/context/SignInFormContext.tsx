import { createContext, useState } from "react";
import useMultiStepForm from "../hooks/useMultiStepForm";
import { Type } from "../Components/SignUpForms/Type/Type";
import { EmailVerification } from "../Components/SignUpForms/EmailVerification/EmailVerification";
import { Info } from "../Components/SignUpForms/Info/Info";


export const SignInFormContext = createContext<any>(null)

interface FormData {
    type: string;
    email: string;
    verificationCode: string;
    name: string;
    password: string;
    confirmPassword: string;
}

export const SignInFormContextProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {

    const initialFormState: FormData = {
        type: "",
        email: "",
        verificationCode: "",
        name: "",
        password: "",
        confirmPassword: ""
    }

    const [formData, setFormData] = useState<FormData>(initialFormState)

    const steps = [
        <Type />,
        <EmailVerification />,
        <Info />
    ];

    const { step, isFirstStep, isLastStep, next, back } = useMultiStepForm(steps);


    const contextValue = {
        step,
        isFirstStep,
        isLastStep, next,
        back,
        formData,
        setFormData
    }


    return <SignInFormContext.Provider value={contextValue} >
        {children}
    </SignInFormContext.Provider>
}

