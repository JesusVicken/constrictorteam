import { ReactNode } from 'react'

interface SectionTitleProps {
    title: string
    subtitle?: string
    className?: string
    children?: ReactNode
}

export function SectionTitle({ title, subtitle, className, children }: SectionTitleProps) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            {subtitle && (
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl text-center">
                    {subtitle}
                </p>
            )}
            {children}
        </div>
    )
}