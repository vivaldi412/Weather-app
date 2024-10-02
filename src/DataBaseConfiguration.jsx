
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vzcxbqqlcnknhdkzxkmm.supabase.co'
const supabaseKey = `${import.meta.env.VITE_SUPA_BASE_KEY}`
export const supabase = createClient(supabaseUrl, supabaseKey)
