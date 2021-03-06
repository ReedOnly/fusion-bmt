import React from 'react'
import ActionCreateSidebar from './ActionCreateSidebar'
import { Participant, Question } from '../../../api/models'
import { useCreateActionMutation } from '../../../api/mutations'
import { TextArea } from '@equinor/fusion-components'

interface Props {
    isOpen: boolean
    connectedQuestion: Question
    possibleAssignees: Participant[]
    onClose: () => void
}

const ActionCreateSidebarWithApi = ({ isOpen, connectedQuestion, possibleAssignees, onClose }: Props) => {
    const { createAction, error: errorCreatingAction } = useCreateActionMutation()

    if (errorCreatingAction !== undefined) {
        return (
            <div>
                <TextArea value={`Error creating action: ${JSON.stringify(errorCreatingAction)}`} onChange={() => {}} />
            </div>
        )
    }

    return (
        <ActionCreateSidebar
            open={isOpen}
            onClose={onClose}
            connectedQuestion={connectedQuestion}
            possibleAssignees={possibleAssignees}
            onActionCreate={action => {
                onClose()
                createAction(action)
            }}
        />
    )
}

export default ActionCreateSidebarWithApi
