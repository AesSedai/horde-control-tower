import { createFormContext } from "@mantine/form"

interface WorkerFormValues {
    paused: boolean
    maintenance: boolean
}

// You can give context variables any name
export const [WorkerFormProvider, useWorkerFormContext, useWorkerForm] = createFormContext<WorkerFormValues>()
