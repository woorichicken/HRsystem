import { ExternalLink } from "lucide-react"
import type { MemoBlock as MemoBlockData } from "./memoData"

/**
 * 메모 본문 블록 하나를 그린다.
 * FAIR 메모 상세와 「인수합병에 따른 Labor 실사」(/global-companies/ma-due-diligence)가 함께 쓴다.
 */
export default function MemoBlock({ block }: { block: MemoBlockData }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="break-keep mt-10 text-xl sm:text-2xl font-bold text-gray-900">
          {block.text}
        </h2>
      )
    case "h3":
      return (
        <h3 className="break-keep mt-7 text-base sm:text-lg font-semibold text-gray-800">
          {block.text}
        </h3>
      )
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5">
              <span aria-hidden className="mt-0.5 shrink-0 text-primary">
                •
              </span>
              <span className="break-keep text-sm sm:text-base leading-relaxed text-gray-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )
    case "callout":
      return (
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
          <p className="mb-1.5 text-sm font-bold text-primary">{block.title}</p>
          <p className="break-keep text-sm leading-relaxed text-gray-700">{block.text}</p>
        </div>
      )
    case "links":
      return (
        <ul className="mt-5 space-y-2">
          {block.items.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 break-all text-sm sm:text-base font-semibold text-primary hover:underline"
              >
                {link.label}
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      )
    case "p":
    default:
      return (
        <p className="break-keep mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
          {block.text}
        </p>
      )
  }
}
