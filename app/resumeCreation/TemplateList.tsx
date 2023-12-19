import templatesList from '../static/template';

const TemplateList = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            {templatesList.map((item)=>{
                return <img key={item.templateID} src = {item.source} className='cursor-pointer'/>
            })}
        </div>
    )
}

export default TemplateList;