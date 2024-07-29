import { ProjectComponent } from '@/components/project.component'
import { App, Content, DarkModeToggle, Flexer, Header, Heading, Icon, Text, View } from '@fold-dev/core'
import { project } from '../work.json'
import { useEffect, useMemo } from 'react'
import { setIsScrolled } from '@/util'
import { ArrowLeftCircleIcon, ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router'
import { HeroComponent } from '@/components/hero.component'
import { SocialIcon } from 'react-social-icons'

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
                bgToken="base-900"
                bg="transparent"
                border="0"
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

            <div className="heroes">
                <View
                    row
                    bgToken="base-900"
                    gap="2rem"
                    p="0.5rem 1rem 0 1rem">
                    <HeroComponent 
                        flex={2}  
                        image="adtriba.png"
                        notes="Adtriba is a marketing attribution & machine learning company."
                        project="Adtriba"
                        slug="adtriba"
                        year="2022"
                        url="https://adtriba.com"
                    />

                    <HeroComponent 
                        flex={1}    
                        image="fold.png"
                        notes="Zero-dependency React components for scaling your product to the next level."
                        project="Fold"
                        slug="fold"
                        year="2024"
                        url="https://fold.dev"
                    />
                </View>

                <View
                    row
                    bgToken="base-900"
                    gap="2rem"
                    p="2rem 1rem 2rem 1rem">
                    <HeroComponent 
                        flex={1}    
                        adjust={80}
                        image="wami.png"
                        notes="Wami is an open source virtual consultation, coaching & messaging platform. Whether you are dietitian, therapist or personal trainer."
                        project="Wami"
                        slug="wami"
                        year="2019"
                        url="https://github.com/joduplessis/wami"
                    />

                    <HeroComponent 
                        flex={2}  
                        adjust={50}  
                        image="weekday.png"
                        notes="Weekday is a self hosted B2B messaging & project collaboration app. With web, Android, iOS & desktop apps."
                        project="Weekday"
                        slug="adtriba"
                        year="2020"
                        url="https://weekday.work"
                    />
                </View>
            </div>

            <Content
                row
                p="0 1rem"
                m="1rem 0 0 0"
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
