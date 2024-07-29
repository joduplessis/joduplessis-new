import { getFirstImage, getImageUrl } from '@/util'
import { Heading, Link, Text, View } from '@fold-dev/core'
import { useNavigate } from 'react-router'

export const HeroComponent = (props: any) => {
    const navigate = useNavigate()
    const {
        bg = 'transparent',
        adjust = 0,
        flex,
        image,
        notes,
        project,
        slug,
        year,
        url,
    } = props

    return (
        <View
            flex={flex}
            className="hero"
            onClick={() => navigate(`/work/${slug}`)}>
            <View
                row
                gap="2rem"
                width="100%"
                radius="var(--f-radius)"
                position="relative"
                style={{ overflow: 'hidden' }}
                alignItems="flex-start"
                className="hero__container f-buttonize">

                <View
                    column
                    flex={1}
                    gap={10}
                    p="2rem"
                    alignItems="flex-start">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="base-600"
                        id="features">
                        {year}
                    </Text>
                    <Heading
                        colorToken="base-100"
                        fontWeight={400}>
                        {project}
                    </Heading>
                    <Text colorToken="base-500">
                        {notes}
                    </Text>
                    <Link
                        target="_blank"
                        href={url}
                        colorToken="base-50"
                        className="f-underline"
                        textDecoration="none"
                        onClick={(e) => {
                            e.stopPropagation()

                        }}>
                        {url.replace('https://', '')}
                    </Link>
                </View>

                <View
                    bg={bg}
                    style={{ marginTop: adjust }}
                    flex={2}
                    height={500}
                    position="relative">
                    <View 
                        className="hero-image"
                        style={{ 
                            backgroundImage: 'url(' + image + ')',
                        }}
                    />
                </View>
                
            </View>
        </View>
    )
}
