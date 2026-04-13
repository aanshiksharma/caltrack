export type Workout = {
    id: string,
    name: string,
    pr: {
        weight: number,
        reps: number
    },
    createdAt: string
}