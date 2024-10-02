<<<<<<< HEAD:src/DataBaseConfiguration.jsx

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vzcxbqqlcnknhdkzxkmm.supabase.co'
const supabaseKey = `${import.meta.env.VITE_SUPA_BASE_KEY}`
export const supabase = createClient(supabaseUrl, supabaseKey)
=======

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vzcxbqqlcnknhdkzxkmm.supabase.co'
const supabaseKey = SUPA_BASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
>>>>>>> 462f97daecb030c1dc39d667bf03fe6afb722ebe:.github/workflows/DataBaseConfiguration.jsx
