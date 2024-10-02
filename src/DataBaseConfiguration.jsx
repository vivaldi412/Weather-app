
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vzcxbqqlcnknhdkzxkmm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Y3hicXFsY25rbmhka3p4a21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMjA0NTQsImV4cCI6MjA0MjY5NjQ1NH0.If0KZlXhluZuGIDyf5Bcvc_4sItAH8ZCSU_pNyz23Eg'

export const supabase = createClient(supabaseUrl, supabaseKey)