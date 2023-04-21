import { useState } from "react";
import { Form, Input, Label, Button, Tag } from "./SearchForm.styled";
import { useSearch } from "context/contectxtHooks";



export function SearchForm() {
    const search = useSearch();

    const [input, setInput] = useState("");

    const onChange = e => {
        setInput(e.currentTarget.value.toLowerCase());
    }; 

    const onSubmit = e => {
        e.preventDefault();
        search.setSearch(input);
        resetForm();
    };

    const resetForm = () => {
        setInput("");
    }
    return (
        <Tag>
            <Form onSubmit={onSubmit}>
                <Button type="submit">🔍
                    <Label>Search</Label>
                </Button>
            
                <Input
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Знайти товар за назвою"
                    value={input}
                    onChange={onChange}
            />
            </Form>
        </Tag>
    );
};
