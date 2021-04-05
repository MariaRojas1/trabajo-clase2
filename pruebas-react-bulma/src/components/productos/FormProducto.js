import React, { useState } from 'react';
import { Section, Heading, Form, Icon, Button } from 'react-bulma-components';
const { Input, Field, Control, Label, Textarea, InputFile } = Form;
const FormProducto = () => {
    const [form, setForm] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: null
    });

    const changeForm = (campo, valor) => {
        setForm({ ...form, [campo]: valor });
        console.log(form);
    }

    return (
        <Section style={{ backgroundColor: 'white' }}>
            <Heading>Nuevo Producto</Heading>
            <Field>
                <Label>Nombre</Label>
                <Control>
                    <Input onChange={(event) => { changeForm('nombre', event.target.value) }} placeholder="Nombre" value={form.nombre} />
                </Control>
            </Field>
            <Field>
                <Label>Descripción</Label>
                <Control>
                    <Textarea onChange={(event) => { changeForm('descripcion', event.target.value) }} placeholder="Descripción" value={form.descripcion} />
                </Control>
            </Field>
            <Field>
                <Label>Precio</Label>
                <Control>
                    <Input onChange={(event) => { changeForm('precio', event.target.value) }} placeholder="Descripción" value={form.precio} />
                </Control>
            </Field>
            <Field>
                <Label>Imagen</Label>
                <Control>
                    <InputFile onChange={(event) => { changeForm('imagen', event.target.value) }} disabled value={form.imagen} icon={<Icon icon="upload" />} boxed placeholder="Textarea" />
                </Control>
            </Field>
            <Field kind="group">
                <Control>
                    <Button type="primary">Enviar</Button>
                </Control>
                <Control>
                    <Button color="link">Cancelar</Button>
                </Control>
            </Field>
        </Section>

    )
}

export default FormProducto;