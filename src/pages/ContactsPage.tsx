import { FC, useRef, useState } from "react";
import * as Form from "@radix-ui/react-form";
import "./ContactsPage.css";
import styled from "styled-components";
import { BASE_URL } from "../environments";

export const ContactsPage: FC = () => {

    const [greetingsMsg, setGreetingsMsg] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(formRef.current);

        fetch(BASE_URL + `/msg?userName=${formData.get("name")}`)
        .then((respose: Response) => {
            if(respose.ok){
                setIsSubmitted(true)
                return respose.json()
            } else {
                throw new Error("Server response was not OK. Status=" + respose.status)
            }
        })
        .then((result:{message: string}) => {
            setGreetingsMsg(result.message)
        })
        .catch((error:Error) => {
            console.error(error)
        })
    }

    const Content = styled.div`
        height: calc(100vh - 120px);
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const GreetingsMsg = styled.h1`
        text-align: center;'
    `
    return (
        <main id="main" className="contacts-page grid-container">
            <Content className="contacts-page__content">
                { !isSubmitted &&
                    <Form.Root className="FormRoot" ref={formRef}>
                        <Form.Field className="FormField" name="name">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Form.Label className="FormLabel">Name</Form.Label>
                                <Form.Message className="FormMessage" match="valueMissing">
                                    Please enter your name
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input 
                                    className="Input"
                                    type="text" 
                                    required 
                                    name="name"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field className="FormField" name="email">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Form.Label className="FormLabel">Email</Form.Label>
                                <Form.Message className="FormMessage" match="valueMissing">
                                    Please enter your email
                                </Form.Message>
                                <Form.Message className="FormMessage" match="typeMismatch">
                                    Please provide a valid email
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input 
                                    className="Input" 
                                    type="email" 
                                    required
                                    name="email"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field className="FormField" name="message">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Form.Label className="FormLabel">Message</Form.Label>
                                <Form.Message className="FormMessage" match="valueMissing">
                                    Please enter a message
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <textarea 
                                    className="Textarea" 
                                    required 
                                    name="message"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Submit asChild>
                            <button className="Button" type="submit" style={{ marginTop: 10 }} onClick={(event) => handleSubmit(event)}>
                                Submit
                            </button>
                        </Form.Submit>
                    </Form.Root>
                }
                { isSubmitted &&
                    <GreetingsMsg className="contact-page__greetings-msg h1-regular-text">{greetingsMsg}</GreetingsMsg>
                }
            </Content>
        </main>
    )
}