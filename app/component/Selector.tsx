import React from 'react'
import CreatableSelect from 'react-select/creatable';

export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

const options: readonly ColourOption[] = [
    { value: 'grammar', label: 'Grammar Correction', color: '#00B8D9', isFixed: true },
    { value: 'competitive', label: 'Enhanced Competitiveness', color: '#0052CC', isDisabled: false },
    { value: 'clarity', label: 'Improved Clarity', color: '#5243AA' },
    { value: 'impact', label: 'Increased Impact', color: '#FF5630', isFixed: true },
    { value: 'engagement', label: 'Enhanced Engagement', color: '#FF8B00' },
    { value: 'readability', label: 'Optimized Readability', color: '#FFC400' },
    { value: 'highlight', label: 'Career Highlights', color: '#36B37E' },
    { value: 'precision', label: 'Tailored Precision', color: '#00875A' },
    { value: 'professional', label: 'Professional Optimization', color: '#253858' },
    { value: 'competitive-edge', label: 'Competitive Edge', color: '#666666' },
  ];

const defaultValues: ColourOption[] = [
    options[0],
    options[1], 
    options[2],
    options[3],
    options[4], 
    options[5],
    options[6],
];

const Selector = () => {
    return (
        <>
            <CreatableSelect isMulti options={options} defaultValue={defaultValues} />
        </>
    )
}

export default Selector;
