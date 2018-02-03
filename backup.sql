--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: kamalelazizialaoui
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: kamalelazizialaoui
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Guestbooks; Type: TABLE; Schema: public; Owner: kamalelazizialaoui
--

CREATE TABLE "Comments" (
    id integer NOT NULL,
    name character varying(255),
    message character varying(255),
    movie_id integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Commnents" OWNER TO kamalelazizialaoui ;

--
-- Name: Guestbooks_id_seq; Type: SEQUENCE; Schema: public; Owner: kamalelazizialaoui
--

CREATE SEQUENCE "Comments_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Comments_id_seq" OWNER TO kamalelazizialaoui;

--
-- Name: Guestbooks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kamalelazizialaoui
--

ALTER SEQUENCE "Commnets_id_seq" OWNED BY "rottentomatoes".id;


--
-- Name: Guestbooks id; Type: DEFAULT; Schema: public; Owner: kamalelazizialaoui
--

ALTER TABLE ONLY "Comments" ALTER COLUMN id SET DEFAULT nextval('"Comments_id_seq"'::regclass);


--
-- Data for Name: Guestbooks; Type: TABLE DATA; Schema: public; Owner: kamalelazizialaoui
--

COPY "Comments" (id, name, message, movie_id, "createdAt", "updatedAt") FROM stdin;
-- 17	kamal	hey hey yo yo yo	2017-12-26 13:47:48.278-05	2018-01-15 22:31:02.31-05
-- 18	Billy	bob	2018-01-15 22:31:12.67-05	2018-01-15 22:31:12.67-05
\.


--
-- Name: Guestbooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kamalelazizialaoui
--

SELECT pg_catalog.setval('"Comments_id_seq"', 18, true);


--
-- Name: Guestbooks Guestbooks_pkey; Type: CONSTRAINT; Schema: public; Owner: kamalelazizialaoui
--

ALTER TABLE ONLY "Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--
