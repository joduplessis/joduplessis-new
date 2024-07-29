import React from 'react'
import { FoldProvider } from '@fold-dev/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/app.layout'
import { ProjectLayout } from './layouts/project.layout'
import { WorkLayout } from './layouts/work.layout'

export default function (props: any) {
    return (
        <BrowserRouter>
            <FoldProvider>
                <Routes>
                    <Route
                        path="/"
                        element={<AppLayout />} 
                    />
                    <Route
                        path="/work"
                        element={<WorkLayout />} 
                    />
                    <Route
                        path="/work/:project"
                        element={<ProjectLayout />}
                    />       
                </Routes>
            </FoldProvider>
        </BrowserRouter>
    )
}
