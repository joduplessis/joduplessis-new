import { ProjectComponent } from '@/components/project.component'
import { App, Content, DarkModeToggle, Flexer, Header, Heading, Icon, Text, View } from '@fold-dev/core'
import { project } from '../work.json'
import { useEffect, useMemo } from 'react'
import { setIsScrolled } from '@/util'
import { ArrowLeftCircleIcon, ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router'

export const WorkLayout = (props: any) => {
    const navigate = useNavigate()
    const projects = useMemo(() => {
        return project.sort((a, b) => {
            return a.year < b.year ? 1 : a.year > b.year ? -1 : 0
        })
    }, [project])

    useEffect(() => {
        if (!!window['scrollPosition']) scrollTo(0, window['scrollPosition'])
        window.addEventListener('scroll', setIsScrolled, { passive: true })
        setIsScrolled()
        return () => window.removeEventListener('scroll', setIsScrolled)
    }, [])

    return (
        <App    
            style={{ overflow: 'scroll' }}
            display="block" 
            className="home">
            <Header 
                gap="1rem"
                bgToken="base-950"
                colorToken="accent"
                p="1rem">
                <Icon
                    onClick={() => navigate('/')}
                    className="f-buttonize"
                    icon={ArrowLeftIcon}
                    size="xl" 
                    color="inherit"
                />
                <View
                    column
                    flex={1}>
                    <Heading color="inherit">Work</Heading>
                    <Text color="inherit">2004 - Present</Text>
                </View>
                <DarkModeToggle />
            </Header>
            <Content
                row
                p="1rem"
                style={{ flexWrap: 'wrap' }}>
                {projects.map((project, index) => (
                    <ProjectComponent
                        key={index}
                        {...project}
                    />
                ))}
            </Content>
        </App>
    )
}
