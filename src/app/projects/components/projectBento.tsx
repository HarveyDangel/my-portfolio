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
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			{/* 1. Problem Card - Large (Span 2 Columns) */}
			<div className="md:col-span-2 md:row-span-1 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
				<div>
					<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
						<AlertCircle className="text-red-500" size={24} />
					</div>
					<h3 className="text-2xl font-bold text-slate-900 mb-4">
						The Problem
					</h3>
					<p className="text-slate-600 leading-relaxed text-lg">{theProblem}</p>
				</div>
				{/* <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-4">
                  Status: Resolved
						</div> */}
			</div>

			<div className="md:col-span-1 md:row-span-2">
				<TechMetrics metrics={metrics} />
			</div>

			{/* 3. Tech Architecture Card (Small) */}
			<div className="rounded-3xl bg-slate-900 p-8 flex flex-col justify-between text-white md:col-span-2">
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
			<div className="md:col-span-3 md:row-span-2 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
				<div className="flex-1">
					<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
						<Layout className="text-blue-500" size={24} />
					</div>
					<h3 className="text-2xl font-bold text-slate-900 mb-2">
						The Solution
					</h3>
					<p className="text-slate-600 leading-relaxed">{theSolution}</p>
				</div>
				{/* Placeholder for a mini-graphic or feature list */}

				<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
					{features.map((feature: Feature, index: number) => (
						<div
							key={index}
							className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
						>
							<div className="font-bold text-blue-600">{feature.title}</div>
							<div className="text-xs text-slate-500 text-balance">
								{feature.detail}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* 5. Challenges Card (Iterates through your challenges array) */}
			<div className="flex flex-col md:flex-row md:col-span-3 md:row-span-2 rounded-3xl bg-white border border-slate-200 p-8 shadow-sm gap-4">
				<h3 className="text-2xl font-bold text-slate-900 mb-2">
					The Challenge
				</h3>
				{theChallenges.map((challenge: Challenge, index) => (
					<div
						key={index}
						className={`md:col-span-1 md:row-span-2 rounded-2xl p-8 border flex flex-col shadow-sm transition-all
							${
								index % 2 === 0
									? "bg-amber-50 border-amber-100"
									: "bg-indigo-50 border-indigo-100"
							}`}
					>
						<div
							className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 
            ${
							index % 2 === 0
								? "bg-white text-amber-500"
								: "bg-white text-indigo-500"
						}`}
						>
							<ShieldAlert size={24} />
						</div>
						<h3 className="text-xl font-bold text-slate-900 mb-3">
							{challenge.title}
						</h3>
						<p className="text-slate-600 text-sm leading-relaxed">
							{challenge.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
