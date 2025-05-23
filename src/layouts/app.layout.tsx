import { App, Avatar, Content, Flexer, Header, Heading, Link, Main, Text, View } from '@fold-dev/core'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

console.log('%c Hi! 👋🏻', 'background: #222; color: #FF5A5A')
console.log('%c Work → https://joduplessis.com/work', 'background: #222; color: #FF5A5A')
console.log('%c CV → https://joduplessis.com/cv.pdf', 'background: #222; color: #FF5A5A')
console.log('%c Email → jo@joduplessis.com', 'background: #222; color: #FF5A5A')

export const AppLayout = (props: any) => {
    return (
        <App className="home">
            <View
                bg="linear-gradient(15deg, var(--f-color-purple-50), var(--f-color-accent-50), var(--f-color-purple-100))"
                position="absolute"
                style={{ inset: 0, opacity: 0.25 }}
                zIndex={0}
            />
            <Content
                flexDirection="column"
                height="100%">
                <Header
                    border="none"
                    bg="transparent"
                    p="2rem"
                    width="100%">
                    <a href="mailto:jo@joduplessis.com">
                        <Avatar
                            src="./avatar.png"
                            name="Jo du Plessis"
                            className="f-buttonize"
                            size="lg"
                            style={{ 
                                outlineOffset: 2,
                                outline: '2px solid var(--f-color-accent)', 
                            }}
                        />
                    </a>
                    <Flexer />
                   {/*  <Link 
                        size="lg"
                        style={{ '--f-underline-size': '2.5px', '--f-underline-position': '100%' }}
                        className="f-underline"
                        colorToken="text"
                        target="_blank"
                        m="0 1.5rem 0 0"
                        href="https://calendar.app.google/6AqCs1rtwrh1v8LX7">
                        Book a Meet
                    </Link> */}
                    {/* <Link 
                        style={{ '--f-underline-size': '2.5px', '--f-underline-position': '100%' }}
                        size="lg"
                        className="f-underline hide-on-mobile"
                        colorToken="text"
                        m="0 1.5rem 0 0"
                        href="mailto:jo@joduplessis.com">
                        Contact
                    </Link> */}
                    <SocialIcon
                        url="mailto:jo@joduplessis.com"
                        target="_blank"
                        fgColor="var(--f-color-surface-inverse)"
                        bgColor="transparent"
                        style={{ marginRight:5 }}
                    />
                    <SocialIcon
                        url="https://github.com/joduplessis"
                        target="_blank"
                        fgColor="var(--f-color-surface-inverse)"
                        bgColor="transparent"
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/jo-duplessis"
                        target="_blank"
                        fgColor="var(--f-color-surface-inverse)"
                        bgColor="transparent"
                    />
                </Header>
                <Main
                    column
                    width="100%"
                    className="home-main"
                    alignItems="flex-start"
                    flex={1}
                    gap="1rem">
                    <Heading huge>UI/UX guy. </Heading>
                    <Heading huge>Fullstack engineer. </Heading>
                    <Heading huge>Design systems geek. </Heading>
                    <Heading huge>Building{' '}
                        <Link
                            style={{ '--f-underline-size': '7px', '--f-underline-position': '85%' }}
                            fontSize="inherit"
                            href="https://fold.dev"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline">
                            Fold 
                        </Link> &{' '}
                        <Link
                            style={{ '--f-underline-size': '7px', '--f-underline-position': '85%' }}
                            fontSize="inherit"
                            href="https://fronteer.app"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline">
                            Fronteer
                        </Link>
                        .
                    </Heading>
                    <Text size="xl" m="1rem 0 0 0">
                        You can reach me via{' '}
                        <Link
                            style={{ '--f-underline-size': '3px', '--f-underline-position': '90%' }}
                            size="xl"
                            href="mailto:jo@joduplessis.com"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline">
                            e-mail
                        </Link>
                        .
                    </Text>
                    <div style={{ height: '4rem' }} />
                </Main>
            </Content>
        </App>
    )
}
