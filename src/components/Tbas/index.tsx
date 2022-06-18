import React, {memo} from 'react'
import Tab from './Tab'
import TabItem from './TabItem'

const SeleTab = () => {
    return <>
    <Tab onChange={(name: string) => {
    }}>
       <TabItem name='1' label="选项一">
        angla
       </TabItem>
       <TabItem name='2' label="选项二">Vue</TabItem>
       <TabItem name='3' label="选项三">React</TabItem>
    </Tab>
    </>
}

export default memo(SeleTab)