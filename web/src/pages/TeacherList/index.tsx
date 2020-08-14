import React from 'react';


import './styles.css';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';


function teacherList() { 
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Ciências', label: 'Ciências'},
                            { value: 'Educação Física', label: 'Educação Física'},
                            { value: 'Português', label: 'Português'},
                            { value: 'Química', label: 'Química'},
                            { value: 'Filosofia', label: 'Filosofia'}
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda-feira'},
                            { value: '2', label: 'Terça-feira'},
                            { value: '3', label: 'Quarta-feira'},
                            { value: '4', label: 'Quinnta-feira'},
                            { value: '5', label: 'Sexta-feira'},
                            { value: '6', label: 'Sábado'}
                        ]}
                    />
                    <Input name="time" type="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default teacherList;