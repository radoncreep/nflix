// import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import { BrowseContainer } from '../container/browser';

export default function Browse({ children, ...restProps }) {
    // we need the series and the files 
    const { series } = useContent('series');
    const { films } = useContent('films');

    // we need slides
    const slides = selectionFilter({ series, films });

    // pass it to the browse container

    return <BrowseContainer slides={slides} />
};