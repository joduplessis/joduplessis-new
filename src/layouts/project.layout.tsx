import { ProjectComponent } from '@/components/project.component'
import {
    App,
    Badge,
    Content,
    Flexer,
    Header,
    Heading,
    Icon,
    Image,
    Notification,
    NotificationContent,
    Stack,
    Text,
    View,
} from '@fold-dev/core'
import { project } from '../work.json'
import { useEffect, useMemo } from 'react'
import { getImageUrl, setIsScrolled } from '@/util'
import { ArrowLeftCircleIcon, ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useNavigate, useParams } from 'react-router'

export const getLastUrlPath = () => {
    const urlParts = window.location.href.split('?')[0].split('/')
    return urlParts[urlParts.length - 1]
}

export const ProjectLayout = (props: any) => {
    const params = useParams()
    const navigate = useNavigate()
    const { author, images, links, notes, partner, project_type, project_name, roles, slug, tags, year, isPrivate } =
        useMemo(() => {
            const p = project.find((p) => p.slug == params.project)
            return { 
                ...p, 
                project_name: p.project, 
                isPrivate: p.private,
            }
        }, [project])

    return (
        <App
            style={{ overflow: 'scroll' }}
            display="block"
            className="home">
            <Header
                gap="1rem"
                p="1rem"
                bgToken="base-950"
                colorToken="accent">
                <Icon
                    onClick={() => navigate('/work')}
                    className="f-buttonize"
                    icon={ArrowLeftIcon}
                    size="xl"
                    color="inherit"
                />
                <View
                    column
                    flex={1}>
                    <Heading color="inherit">{project_name}</Heading>
                    <Text color="inherit">{year}</Text>
                </View>
                <View width={30} />
            </Header>
            {isPrivate && (
                <Notification
                    bottomAccent
                    variant="highlight">
                    <NotificationContent textAlign="center">
                        More information available on request.
                    </NotificationContent>
                </Notification>
            )}
            <Content
                row
                p="3rem">
                <View
                    row
                    gap="2rem"
                    alignItems="flex-start"
                    className="project-panels">
                    <View className="project-images">
                        {images
                            .filter((image, index) => index > 0)
                            .map((image, index) => (
                            <a
                                key={index}
                                className="f-buttonize"
                                href={getImageUrl(image)}
                                target="_blank">
                                <Image    
                                    src={getImageUrl(image)}
                                />
                            </a>
                        ))}
                    </View>
                    <View className="project-info">
                        <Stack
                            direction="vertical"
                            spacing="0.5rem">
                            <Heading
                                as="h4"
                                fontWeight="bold">
                                Partner
                            </Heading>
                            <Text>{partner || 'None'}</Text>
                            <div />
                            <Heading
                                as="h4"
                                fontWeight="bold">
                                Notes
                            </Heading>
                            <Heading as="h2">
                                {notes}
                            </Heading>
                            <div />
                            <Heading
                                as="h4"
                                fontWeight="bold">
                                Project Type
                            </Heading>
                            <Text>{project_type}</Text>
                            <div />
                            <Heading
                                as="h4"
                                fontWeight="bold">
                                Role
                            </Heading>
                            <Text>{roles.join(', ')}</Text>
                            <div />
                            <Heading
                                as="h4"
                                fontWeight="bold">
                                Tech & Skillset
                            </Heading>
                            <View
                                row
                                gap={3}
                                justifyContent="flex-start"
                                style={{ flexWrap: 'wrap' }}>
                                {tags.map((tag, index) => (
                                    <Badge
                                        variant="neutral"
                                        key={index}>
                                        {tag}
                                    </Badge>
                                ))}
                            </View>
                        </Stack>
                        {/* 
                        <span
                            v-for="(link, index) in getFirstElement(item).links"
                            v-if="getFirstElement(item).links[0]"
                        >
                            <a className="link" target="_blank" v-bind:href="link">
                                → {{ link.replace("http://", "").replace("https://", "") }}
                            </a>
                            <br />
                        </span> */}
                    </View>
                </View>
            </Content>
        </App>
    )
}
