// import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse({ children, ...restProps }) {
    // we need the series and the files 
    const { series } = useContent('series');
    const { films } = useContent('films');

    // we need slides
    const slides = selectionFilter({ series, films });
    console.log(slides);
    // pass it to the browse container

    return <p>Hello from the browse page</p>
};