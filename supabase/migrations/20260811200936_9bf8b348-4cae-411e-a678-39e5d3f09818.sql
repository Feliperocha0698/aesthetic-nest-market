CREATE TABLE public.booking_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  trip_date DATE NOT NULL,
  trip_time TEXT NOT NULL,
  round_trip BOOLEAN NOT NULL DEFAULT false,
  return_date DATE,
  return_time TEXT,
  passengers INTEGER NOT NULL DEFAULT 1,
  luggage INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  language TEXT NOT NULL DEFAULT 'pt',
  status TEXT NOT NULL DEFAULT 'new',
  quoted_amount NUMERIC(10,2),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.booking_requests TO anon;
GRANT INSERT ON public.booking_requests TO authenticated;
GRANT ALL ON public.booking_requests TO service_role;

ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking request"
ON public.booking_requests FOR INSERT TO anon, authenticated
WITH CHECK (true);

CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'pt',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_messages TO anon;
GRANT INSERT ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can send a contact message"
ON public.contact_messages FOR INSERT TO anon, authenticated
WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_booking_requests_updated_at
BEFORE UPDATE ON public.booking_requests
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();