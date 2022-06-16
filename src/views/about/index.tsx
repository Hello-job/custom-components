import React, { memo } from 'react'
import useDate from '../../hooks/useDate'

const About = () => {
    const {title} = useDate({title: '我是about'})
    return <>
    {title}
    </>
}

export default memo(About)