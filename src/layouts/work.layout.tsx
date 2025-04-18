import { ProjectComponent } from '@/components/project.component'
import { App, Content, DarkModeToggle, Flexer, Header, Heading, Icon, Text, View } from '@fold-dev/core'
import { project } from '../work.json'
import { useEffect, useMemo, useRef } from 'react'
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
            height="fit-content"
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
                    style={{ marginRight: 15 }}
                />
                <View
                    column
                    flex={1}
                    colorToken="accent-500">
                    <Heading color="inherit">Work</Heading>
                    <Text color="inherit">2004 - Present</Text>
                </View>
                <DarkModeToggle />
            </Header>

            <div className="heroes">
                <View 
                    row
                    width="100%"
                    bg="transparent"
                    style={{ borderTop: '1px solid var(--f-color-base-700)' }}
                    p="1.5rem 0 1rem 0">
                    <Heading 
                        as="h5"
                        colorToken="accent-700"
                        style={{ textTransform: 'uppercase' }}
                        fontWeight={400}
                        letterSpacing={3}
                        color="inherit">
                        Featured Work
                    </Heading>
                </View>

                <View
                    row
                    gap="2rem"
                    p="0.5rem 1.5rem 0 1.5rem">
                   {/*  <HeroComponent 
                        flex={1}    
                        adjustY={0}
                        adjustX={0}
                        image="paiment.png"
                        notes="In-store device payment platform."
                        project="Paiment POS"
                        slug="paiment-pos"
                        year="2024"
                        url=""
                    /> */}
                    <HeroComponent 
                        flex={1} 
                        image="fronteer.png"
                        notes="The journey of a thousand miles begins with a team."
                        project="Fronteer"
                        slug="fronteer"
                        year="2024"
                        url="https://fronteer.app"
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
                    <HeroComponent 
                        flex={1}    
                        image="plural.png"
                        adjustX={-20}
                        notes="The future of insurance on Web3."
                        project="Plural"
                        slug="plural"
                        year="2023"
                        url="https://plural.fi"
                    />
                </View>

                <View
                    row
                    gap="2rem"
                    p="2rem 1.5rem 1.5rem 1.5rem">
                    <HeroComponent 
                        flex={1} 
                        image="adtriba.png"
                        notes="Future-proof marketing measurement and optimization."
                        project="Adtriba"
                        slug="adtriba"
                        year="2022"
                        url="https://adtriba.com"
                    />
                    <HeroComponent 
                        flex={1}  
                        adjustY={50}  
                        image="weekday.png"
                        notes="Level up your team with a self hosted project collaboration platform."
                        project="Weekday"
                        slug="weekday"
                        year="2020"
                        url="https://weekday.work"
                    />
                    <HeroComponent 
                        flex={1}    
                        adjustY={50}
                        adjustX={-50}
                        image="wami.png"
                        notes="Whether you are a dietitian, therapist or personal trainer - you can use Wami to connect with your clients."
                        project="Wami"
                        slug="wami"
                        year="2019"
                        url="https://github.com/joduplessis/wami"
                    />
                </View>

                <View
                    row
                    gap="2rem"
                    p="0.5rem 1.5rem 2rem 1.5rem">
                    <HeroComponent 
                        flex={1}  
                        adjustY={50}
                        image="teachfolk.png"
                        adjustX={-20}
                        notes="Effortlessly drive and scale remote learning from one powerful platform."
                        project="Teachfolk"
                        slug="teachfolk"
                        year="2024"
                        url="https://teachfolk.com"
                    />
                    <HeroComponent 
                        flex={1}    
                        image="chow.jpg"
                        adjustX={-20}
                        notes="Find healthy meal options around you."
                        project="Chow"
                        slug="chow-next"
                        year="2018"
                        url="https://www.chowsolutions.com"
                    />
                    <HeroComponent 
                        flex={1} 
                        image="beiersdorf.png"
                        notes="Beiersdorf consumer insights platform concept."
                        project="Beiersdorf Social Platform"
                        slug="beiersdorf"
                        year="2018"
                        url=""
                    />
                </View>
            </div>

            <Content
                row
                className="projects">
                {projects.filter((p) => !p.hidden).map((project, index) => (
                    <ProjectComponent
                        key={index}
                        {...project}
                    />
                ))}
            </Content>
        </App>
    )
}
