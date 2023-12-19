import Template1 from "../template/template1";

const templateList= [
    {template: Template1, props: {zoom: 0.35 }},
    {template: Template1, props: {zoom: 0.35, tempbgcolor: 'bg-orange-400'}},
    {template: Template1, props: {zoom: 0.35, tempbgcolor: 'bg-blue-300' }},
    {template: Template1, props: {zoom: 0.35, tempbgcolor: 'bg-red-400' }},
    {template: Template1, props: {zoom: 0.35, tempbgcolor: 'bg-orange-200' }},
    {template: Template1, props: {zoom: 0.35, tempbgcolor: 'bg-green-700' }},
]


interface TemplateItem {
    templateID: number;
    source: string;
  }

export const templatesList:TemplateItem[] = [
    {templateID: 1, source: '/images/templates/template1.png'},
    {templateID: 2, source: '/images/templates/template2.png'},
    {templateID: 3, source: '/images/templates/template3.png'},
    {templateID: 4, source: '/images/templates/template4.png'},
    {templateID: 5, source: '/images/templates/template5.png'},
    {templateID: 6, source: '/images/templates/template6.png'}
]

export default templatesList;