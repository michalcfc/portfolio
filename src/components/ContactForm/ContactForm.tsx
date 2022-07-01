import React, {useEffect, useState} from "react"
import { ContactFormD, FormValues } from "./ContactForm.d";

// utils
import { SPACING } from "~utils/styles/spacing";

// components
import { Input } from "~components/common/Form/Input";
import { Select } from "~components/common/Form/Select";
import { Button } from "~components/common/Button";
import { Textarea } from "~components/common/Form/Textarea";

const ContactForm: React.FC<ContactFormD> = () => {

    const initialValues = { name: '', email: '', subject: '', message: '' }
    const [formValues, setFormData] = useState<FormValues>(initialValues)
    const [formErrors, setFormErrors] = useState<FormValues>(initialValues);
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const subjects = [
        { id: 1, value: "job offer", label: "job offer" },
        { id: 2, value: "collaboration", label: "collaboration"}
    ]

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const isValidate = (values: FormValues) => {
        const errors = {} as FormValues;
        if (!values.name) {
            errors.name = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }
        if (!values.subject) {
            errors.subject = "Subject is required!";
        }
        if (!values.message) {
            errors.message = "Message is required!";
        }
        return errors;
    };

    const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormErrors(isValidate(formValues));
        setIsSubmit(true);
        let data = {
            name: formValues.name,
            email: formValues.email,
            subject: formValues.subject,
            message: formValues.message,
        }

        try {
            await fetch("/api/contact", {
                "method": "POST",
                "headers": { "content-type": "application/json" },
                "body": JSON.stringify(data)
            })

            console.log(data)
        } catch (error) {
            // toast error message. whatever you wish
        }
    }

    const changeHandler = (name, value) => {
        setFormData({
            ...formValues,
            [name]: value
        })
    }

    return (
        <form  onSubmit={(e) => handleSubmit(e)}>
            <Input
                label={"Name"}
                value={formValues.name}
                errorText={formErrors.name}
                onChange={(e) => changeHandler("name", e.target.value)}
            />
            <Input
                label={"Email"}
                value={formValues.email}
                errorText={formErrors.email}
                onChange={(e) => changeHandler("email", e.target.value)}
            />
            <Select
                label={"Subject"}
                options={subjects}
                value={formValues.subject}
                errorText={formErrors.subject}
                onChange={(e) => changeHandler("subject", e.target.value)}
            />
            <Textarea
                label={"Message"}
                value={formValues.message}
                errorText={formErrors.message}
                placeholder={'Write a message...'}
                onChange={(e) => changeHandler("message", e.target.value)}
            />
            <Button
                name={"Send"}
                mt={SPACING.md}
                variant={"success"}
                onClick={() => {}}
            />
        </form>
    )
}

export default ContactForm;
