import React, { createContext, useContext, useState, ReactNode } from "react";

type TaskContextType = {
    tasks: string[];
    addTask: (task: string) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<string[]>([
        "To check email",
        "UI task web page",
        "Learn javascript basic",
        "Learn HTML Advance",
        "Medical App UI",
        "Learn Java",
    ]);

    const addTask = (task: string) => {
        setTasks((prev) => [...prev, task]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask must be used within a TaskProvider");
    }
    return context;
};
