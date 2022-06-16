import React, { useState, useEffect } from 'react'

const useDate = (props: any) => {
   const { title } = props
   const [time, setTime] = useState<any>(null)

   useEffect(() => {
    const timer = setInterval(() => {
        setTime(+new Date)
     },1000)
     return () => clearInterval(timer)
   },[])

   return {
       title: title + ':' + time
   }
}

export default useDate