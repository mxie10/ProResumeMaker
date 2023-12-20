import templatesList from '../static/template';

const TemplateList = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            {templatesList.map((item)=>{
                return (
                    <div className='border-2 border-slate-300'>
                        <img key={item.templateID} src = {item.source} className='cursor-pointer'/>
                    </div>
                )
            })}
        </div>
    )
}

export default TemplateList;