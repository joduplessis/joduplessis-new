import { App, Avatar, Content, Flexer, Header, Heading, Link, LogoSolid, Main, Pill, Text, View } from '@fold-dev/core'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

console.log('%c Hi! 👋🏻', 'background: #222; color: #FF5A5A')
console.log('%c Work → https://joduplessis.com/work', 'background: #222; color: #FF5A5A')
console.log('%c CV → https://joduplessis.com/cv.pdf', 'background: #222; color: #FF5A5A')
console.log('%c Email → jo@joduplessis.com', 'background: #222; color: #FF5A5A')

export const FronteerLogo = ({ scale = 0.75, color = 'var(--f-color-accent)' }) => {
    return (
        <svg
            width={161 * scale * 0.4}
            height={213 * scale * 0.4}
            viewBox="0 0 161 213"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: 2,
            }}>
            <g transform="matrix(1,0,0,1,-6980.36,-2290.73)">
                <g>
                    <g transform="matrix(1.22544,-0.36445,-9.17582e-17,1.97674,4619.42,1221.43)">
                        <rect
                            x="1926.61"
                            y="920.229"
                            width="130.607"
                            height="34.431"
                            style={{ fill: color }}
                        />
                    </g>
                    <g transform="matrix(1.10002,-0.32715,7.55875e-18,1.45742,4861.05,1645.19)">
                        <rect
                            x="1926.61"
                            y="963.459"
                            width="130.607"
                            height="38.507"
                            style={{ fill: color }}
                        />
                    </g>
                    <g transform="matrix(0.579748,-0.17242,-5.33251e-17,0.97746,5863.41,1878.96)">
                        <path
                            d="M2057.22,963.459L1926.61,963.459L2057.22,1001.97L2057.22,963.459Z"
                            style={{ fill: color }}
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}

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
                height="100%"
                bgToken="zinc-200">
                <Header
                    border="none"
                    bg="transparent"
                    p=" 20px"
                    gap="2rem"
                    colorToken="zinc-700"
                    height="fit-content"
                    width="100%">
                    {/* <a href="mailto:jo@joduplessis.com">
                        <Avatar
                            src="./avatar.png"
                            name="Jo du Plessis"
                            className="f-buttonize"
                            size="xl"
                            style={{ 
                                outlineOffset: 2,
                                outline: '2px solid var(--f-color-surface-inverse)', 
                            }}
                        />
                    </a> */}
                    <Text
                        size="xl"
                        fontWeight="bold"
                        color="currentColor">
                        Cargo Cult Studio
                    </Text>
                    <Flexer />
                    <Link
                        style={{ '--f-underline-size': '2.5px', '--f-underline-position': '100%' }}
                        size="lg"
                        className="f-underline hide-on-mobile"
                        color="currentColor"
                        href="mailto:jo@joduplessis.com">
                        About
                    </Link>
                    <Link
                        style={{ '--f-underline-size': '2.5px', '--f-underline-position': '100%' }}
                        size="lg"
                        className="f-underline hide-on-mobile"
                        color="currentColor"
                        href="mailto:jo@joduplessis.com">
                        Expertise
                    </Link>
                    <Link
                        style={{ '--f-underline-size': '2.5px', '--f-underline-position': '100%' }}
                        size="lg"
                        className="f-underline hide-on-mobile"
                        color="currentColor"
                        href="mailto:jo@joduplessis.com">
                        GitHub
                    </Link>
                    <Link
                        style={{ '--f-underline-size': '2.5px', '--f-underline-position': '100%' }}
                        size="lg"
                        className="f-underline hide-on-mobile"
                        color="currentColor"
                        href="mailto:jo@joduplessis.com">
                        Work
                    </Link>
                    <Link
                        size="lg"
                        style={{ '--f-underline-size': '2.5px', '--f-underline-position': '100%' }}
                        className="f-underline"
                        color="currentColor"
                        target="_blank"
                        href="https://calendar.app.google/6AqCs1rtwrh1v8LX7">
                        Book a Meet
                    </Link>
                    {/*      <SocialIcon
                        url="https://github.com/joduplessis"
                        target="_blank"
                        fgColor="var(--f-color-surface-inverse)"
                        bgColor="transparent"
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/jo-duplessis"
                        target="_blank"
                        fgColor="var(--f-color-surface-inverse)"
                        bgColor="var(--f-color-surface)"
                    /> */}
                </Header>

                <Main
                    display="none"
                    column
                    width="100%"
                    className="home-main"
                    alignItems="flex-start"
                    flex={1}
                    gap="1.5rem">
                    <Heading huge>UI/UX guy. </Heading>
                    <Heading huge>Fullstack engineer. </Heading>
                    <Heading huge>Design systems geek. </Heading>
                    <Heading huge>
                        Building{' '}
                        <Link
                            style={{ '--f-underline-size': '7px', '--f-underline-position': '85%' }}
                            fontSize="inherit"
                            href="https://fold.dev"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline">
                            Fold
                        </Link>
                        .
                    </Heading>
                    <Text size="xl">
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

                <Main
                    row
                    width="100%"
                    p="0 20px 20px 20px"
                    alignItems="stretch"
                    alignContent="stretch"
                    justifyContent="stretch"
                    flex={1}
                    gap={20}>
                    <View
                        column
                        alignItems="flex-start"
                        justifyContent="flex-end"
                        radius="var(--f-radius)"
                        flex={1}
                        className="fronteer f-buttonize-outline"
                        style={{ 
                            outlineColor: '#EA6B5A', 
                            outlineOffset: 2,
                            outlineWidth: 4, 
                        }}
                        position="relative"
                        colorToken="slate-800">
                        <View
                            position="absolute"
                            style={{
                                left: '50%',
                                transform: 'translateX(-50%)',
                                top: '40%',
                            }}>
                            <FronteerLogo
                                color="currentColor"
                                scale={1}
                            />
                        </View>
                        <View
                            p="0 0 4rem 4rem"
                            gap="0.5rem">
                            <Pill
                                outline
                                color="currentColor">
                                SaaS Platform
                            </Pill>
                            <Heading
                                fontSize="4.5rem"
                                style={{ fontFamily: 'ff' }}
                                colorToken="currentColor">
                                Fronteer
                            </Heading>
                            <Text
                                colorToken="currentColor"
                                size="xl">
                                The journey of a thousand miles begins with a single task.
                            </Text>
                        </View>
                    </View>
                    <View
                        column
                        alignItems="stretch"
                        alignContent="stretch"
                        justifyContent="stretch"
                        gap={20}
                        flex={1}>
                        <View
                            row
                            bgToken="base-900"
                            flex={1}
                            radius="var(--f-radius)">
                            <LogoSolid 
                                color="var(--f-color-indigo-500)"
                                size="xl"
                            />
                        </View>
                        <View
                            row
                            width="100%"
                            alignItems="stretch"
                            alignContent="stretch"
                            justifyContent="stretch"
                            flex={1}
                            gap={20}>
                            <View
                                column
                                alignItems="stretch"
                                alignContent="stretch"
                                justifyContent="stretch"
                                gap={20}
                                flex={1}>
                                <View
                                    bgToken="base-800"
                                    flex={1}
                                    radius="var(--f-radius)"></View>
                                <View
                                    bgToken="base-800"
                                    flex={1}
                                    radius="var(--f-radius)"></View>
                            </View>
                            <View
                                bgToken="base-800"
                                flex={1}
                                radius="var(--f-radius)"></View>
                        </View>
                    </View>
                </Main>
            </Content>
        </App>
    )
}
