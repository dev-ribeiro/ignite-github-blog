import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function publishedDateRelativeToNow(publishedAt: Date) {
  return formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
}
