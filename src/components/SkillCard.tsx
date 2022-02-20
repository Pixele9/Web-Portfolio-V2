import React from 'react'

interface Props {
	title: string,
    src: string,
}

export const SkillCard:React.FC<Props> = (props) => {
  
  return (
    <div className="flex flex-col mb-2 w-40 h-40">
        {/* <div className="bg-white mt-3 mr-3 h-32 flex flex-col justify-between"> */}
        <div className="w-full h-full">
            <div className="bg-white w-full h-3/4 flex justify-center items-center">
                <img className='object-contain w-full h-24 p-4' src={props.src} alt="programming lang"/>
            </div>
            <div className='flex w-full h-1/4 px-2 items-center'>
                <p className='text-white font-bold'>{ props.title }</p>
            </div>
        </div>

    </div>
  )
}

export default SkillCard