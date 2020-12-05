import React from 'react';
import faqData from '../fixtures/faqs.json';
import { Accordion } from '../components';
import { OptForm } from '../components';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />
            

            <OptForm>
                <OptForm.Input placeholder="Email Address"/>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your mail to create or 
                    restart you membership
                </OptForm.Text>
            </OptForm>
        </Accordion>
    )
}