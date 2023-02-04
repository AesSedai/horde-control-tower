import { createFormContext } from "@mantine/form"

interface UserFormValues {
    trusted: boolean
    flagged: boolean
    worker_invite: string
}

// You can give context variables any name
export const [UserFormProvider, useUserFormContext, useUserForm] = createFormContext<UserFormValues>()
