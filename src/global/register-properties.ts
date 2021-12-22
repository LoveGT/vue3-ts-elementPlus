import { App } from 'vue'

import { formatUtcString, formatTimestamp } from '@/utils/date-format'
export default function registerProperties(app: App) {
	app.config.globalProperties.$filters = {
		formatTime(value: string, format: string) {
			return formatUtcString(value, format)
		},
		formatTimestamp(value: number, format: string) {
			return formatTimestamp(value, format)
		}
	}
}
