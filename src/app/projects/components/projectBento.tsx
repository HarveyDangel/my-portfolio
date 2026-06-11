import React from "react";
import {
	AlertCircle,
	ShieldAlert,
	Layout,
} from "lucide-react";

import TechMetrics from "./technicalMetric";
import Technologies from "./technogies";

interface MetricItem {
	title: string;
	metric: string;
	details: string;
}

interface TechMetricsProps {
	metrics: {
		schema: MetricItem;
		architecture: MetricItem;
		security: MetricItem;
		responsiveness: MetricItem;
	};
}

interface Feature {
	title: string;
	detail: string;
}

interface Challenge {
	title: string;
	description: string;
}

interface ProjectBentoProps {
	technologies: string[];
	theProblem: string;
	theSolution: string;
	features: Feature[];
	theChallenges: Challenge[];
	metrics: TechMetricsProps["metrics"];
}

export default function ProjectBento({
	technologies,
	theProblem,
	theSolution,
	theChallenges,
	features,
	metrics,
}: ProjectBentoProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 scroll-mt-25" id="description">
			{/* 1. Problem Card - Large (Span 2 Columns) */}
			<div className="md:col-span-2 md:row-span-1 rounded-3xl bg-card border border-card p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
				<div>
					<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
						<AlertCircle className="text-red-500" size={24} />
					</div>
					<h3 className="text-2xl font-bold text-primary mb-4">
						The Problem
					</h3>
					<p className="text-secondary leading-relaxed text-lg">{theProblem}</p>
				</div>
				{/* <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-4">
                  Status: Resolved
						</div> */}
			</div>

			<div className="md:col-span-1 md:row-span-2">
				<TechMetrics metrics={metrics} />
			</div>

			{/* 3. Tech Architecture Card (Small) */}
			<div className="rounded-3xl bg-inverse p-8 flex flex-col justify-between text-inverse md:col-span-2">
				<div className="flex justify-between items-start">
					<p className="text-xs text-amber-400 mb-1">Environment</p>
					{/* <div className="px-2 py-1 bg-white/10 rounded text-[10px] uppercase font-bold">
						Stack
					</div> */}
				</div>
				<div>
					<Technologies techIds={technologies}/>
				</div>
			</div>

			{/* 4. Solution Description Card - Wide (Span 3 Columns) */}
			<div className="md:col-span-3 md:row-span-2 rounded-3xl bg-card border border-card p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
				<div className="flex-1">
					<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
						<Layout className="text-blue-500" size={24} />
					</div>
					<h3 className="text-2xl font-bold text-primary mb-2">
						The Solution
					</h3>
					<p className="text-secondary leading-relaxed">{theSolution}</p>
				</div>
				{/* Placeholder for a mini-graphic or feature list */}

				<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
					{features.map((feature: Feature, index: number) => (
						<div
							key={index}
							className="p-4 bg-card rounded-2xl border border-card shadow-sm"
						>
							<div className="font-bold text-link">{feature.title}</div>
							<div className="text-xs text-tertiary text-balance">
								{feature.detail}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* 5. Challenges Card (Iterates through your challenges array) */}
			<div className="flex flex-col md:flex-row md:col-span-3 md:row-span-2 rounded-3xl bg-card border border-card p-8 shadow-sm gap-4">
				<h3 className="text-2xl font-bold text-primary mb-2">
					The Challenge
				</h3>
				{theChallenges.map((challenge: Challenge, index) => (
					<div
						key={index}
						className={`rounded-2xl p-8 border flex flex-col shadow-sm transition-all flex-1
							${
								index % 2 === 0
									? "bg-challenge-amber border-challenge-amber"
									: "bg-challenge-indigo border-challenge-indigo"
							}`}
					>
						<div
							className={`w-10 h-10 rounded-full bg-card flex items-center justify-center mb-4
            ${
							index % 2 === 0
								? "text-challenge-amber"
								: "text-challenge-indigo"
						}`}
						>
							<ShieldAlert size={24} />
						</div>
						<h3 className="text-xl font-bold text-primary mb-3">
							{challenge.title}
						</h3>
						<p className="text-secondary text-sm leading-relaxed">
							{challenge.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
