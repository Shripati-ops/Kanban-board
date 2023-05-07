import { kanbanBoard } from "../pages/kanban";

export const app = [
    {
        path : "kanban-board",
        component : kanbanBoard,
        exact : true,
        requiresAuthentication : true
    }
]