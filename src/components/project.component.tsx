import { getFirstImage } from '@/util'
import { Text, View } from '@fold-dev/core'
import { useNavigate } from 'react-router'

export const ProjectComponent = (props: any) => {
    const navigate = useNavigate()
    const {
        author,
        images,
        links,
        notes,
        partner,
        project_type,
        project,
        roles,
        slug,
        tags,
        year,
    } = props

    return (
        <div 
            onClick={() => navigate(`/work/${slug}`)}
            className="project">
            <div
                style={{ backgroundImage: 'url(' + getFirstImage(images) + ')', }} 
                className="project__container f-buttonize">
                <div className="project__details">
                    <Text fontWeight="bold">
                        {project}
                    </Text>
                    <Text size="sm">
                        {project_type.toUpperCase()}
                    </Text>
                    <Text size="xs">
                        {year}
                    </Text>
                </div>
            </div>
        </div>
    )
}
