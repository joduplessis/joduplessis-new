import { ProjectComponent } from '@/components/project.component'
import {
    App,
    Badge,
    Content,
    DarkModeToggle,
    Flexer,
    Header,
    Heading,
    Icon,
    Image,
    Link,
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
                border="none"
                bgToken="base-900"
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
                    <Heading color="inherit" as="h3" fontWeight={700}>{project_name}</Heading>
                    <Text color="inherit">{year}</Text>
                </View>
                <DarkModeToggle />
            </Header>
            {isPrivate && (
                <Notification
                    m="-1px 0 0 0"
                    bgToken="rose-500">
                    <NotificationContent 
                        textAlign="center"
                        colorToken="surface">
                        Due to the nature of the project, more information is only available on request.
                    </NotificationContent>
                </Notification>
            )}
            <Content
                row
                p="3rem"
                >
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
                            spacing="0.7rem">
                            <Heading
                                as="h4"
                                colorToken="accent">
                                Partner
                            </Heading>
                            <Text size="lg">
                                {partner || 'None'}
                            </Text>
                            <div />
                            <Heading
                                as="h4"
                                colorToken="accent">
                                Notes
                            </Heading>
                            <Text size="lg">
                                {notes}
                            </Text>
                            <div />
                            <Heading
                                as="h4"
                                colorToken="accent">
                                Project Type
                            </Heading>
                            <Text size="lg">{project_type}</Text>
                            <div />
                            <Heading
                                as="h4"
                                colorToken="accent">
                                Role
                            </Heading>
                            <Text size="lg">
                                {roles.join(', ')}
                            </Text>
                            <div />
                            <Heading
                                as="h4"
                                colorToken="accent">
                                Links
                            </Heading>
                            <View
                                column
                                gap="0.5rem"
                                justifyContent="flex-start"
                                alignContent="flex-start"
                                alignItems="flex-start">
                                {links.map((link, index) => (
                                    <Link 
                                        size="lg"
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        textDecoration="none"
                                        className="f-underline">
                                        {link}
                                    </Link>
                                ))}
                            </View>
                            <div />
                            <Heading
                                as="h4"
                                colorToken="accent">
                                Tech & Skillset
                            </Heading>
                            <View
                                row
                                gap={3}
                                justifyContent="flex-start"
                                style={{ flexWrap: 'wrap' }}>
                                {tags.map((tag, index) => (
                                    <Badge
                                        key={index}
                                        fontWeight={600}
                                        style={{ textTransform: 'uppercase' }}
                                        bg="rgba(from var(--f-color-border) r g b / 50%)"
                                        colorToken="text-weak">
                                        {tag}
                                    </Badge>
                                ))}
                            </View>
                        </Stack>
                    </View>
                </View>
            </Content>
        </App>
    )
}
