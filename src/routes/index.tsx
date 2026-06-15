import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroEyesAsset from "@/assets/antes-depois.jpg.asset.json";
const heroEyes = heroEyesAsset.url;
import instructorAsset from "@/assets/rosana.jpg.asset.json";
const instructor = instructorAsset.url;
import antesDepoisCollageAsset from "@/assets/antesdepois-collage.png.asset.json";
const antesDepoisCollage = antesDepoisCollageAsset.url;
import antesDepoisPerfilAsset from "@/assets/antesdepois-perfil.jpg.asset.json";
const antesDepoisPerfil = antesDepoisPerfilAsset.url;
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Heart,
  Award,
  Clock,
  Play,
  GraduationCap,
  Star,
  Crown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Imersão Blefaro Sem Corte — Dra. Rosana Vecchi Caldas | NatureFace",
      },
      {
        name: "description",
        content:
          "Pare de ser mais um profissional do montão. Domine a técnica de rejuvenescimento do olhar sem bisturi, em 30 minutos de consultório. Imersão com a Dra. Rosana Vecchi Caldas.",
      },
      { property: "og:title", content: "Imersão Blefaro Sem Corte" },
      {
        property: "og:description",
        content:
          "A técnica avançada, segura e lucrativa que substitui a blefaroplastia — sem cortes, sem aparelhos caros.",
      },
    ],
  }),
  component: VSLPage,
});

function CTA({
  label = "QUERO ME TORNAR REFERÊNCIA",
  sub,
  href = "#oferta",
}: {
  label?: string;
  sub?: string;
  href?: string;
}) {
  const isExternal = /^https?:\/\//i.test(href);
  return (
    <div className="flex flex-col items-center gap-3 my-8">
      <a
        href={href}
        {...(isExternal ? { rel: "noopener", target: "_top" } : {})}
        className="btn-cta animate-pulse-gold hover:[transform:translateY(-2px)]"
      >
        <Sparkles className="w-5 h-5" /> {label}
      </a>
      {sub && (
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {sub}
        </p>
      )}
    </div>
  );
}

function VSLPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const unmute = () => {
      v.muted = false;
      v.volume = 1;
      v.play().catch(() => {});
      setMuted(false);
      window.removeEventListener("pointerdown", unmute);
      window.removeEventListener("keydown", unmute);
      window.removeEventListener("touchstart", unmute);
      window.removeEventListener("scroll", unmute);
    };
    window.addEventListener("pointerdown", unmute, { once: true });
    window.addEventListener("keydown", unmute, { once: true });
    window.addEventListener("touchstart", unmute, { once: true });
    window.addEventListener("scroll", unmute, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unmute);
      window.removeEventListener("keydown", unmute);
      window.removeEventListener("touchstart", unmute);
      window.removeEventListener("scroll", unmute);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* 1. HEADLINE DE CONFRONTO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroEyes}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-card/60 backdrop-blur text-xs uppercase tracking-[0.25em] text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />{" "}
            Para profissionais da estética
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-normal leading-[1.05]">
            Sua cliente chega dizendo<br />
            <span className="italic text-muted-foreground">
              "nada que eu faça resolve essa ruga"
            </span>
            <br />
            <span className="text-gold-gradient font-semibold">
              e você não sabe o que oferecer?
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ela já tentou cremes, procedimentos e tratamentos, e nada resolveu.
            Não quer cirurgia. E está saindo do seu consultório
            <span className="text-foreground">
              {" "}
              direto para o concorrente
            </span>{" "}
            que sabe entregar o resultado.
          </p>

          <div className="mt-12 relative max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gold/30 shadow-[var(--shadow-elevated)] aspect-video bg-card">
            <img
              src={heroEyes}
              alt="Resultado de rejuvenescimento do olhar"
              width={1920}
              height={1080}
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <CTA sub="Próxima imersão · 21/06 às 9h" />
        </div>
      </section>


      {/* VÍDEO */}
      <section className="px-6 pt-4 pb-12">
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gold/30 shadow-[var(--shadow-elevated)] bg-black relative">
          <video
            ref={videoRef}
            src="/__l5e/assets-v1/b56b9cef-9359-45e4-8372-ac6094b43f8f/videovsl.mov"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-auto block"
          />
          {muted && (
            <button
              type="button"
              onClick={() => {
                const v = videoRef.current;
                if (!v) return;
                v.muted = false;
                v.volume = 1;
                v.currentTime = 0;
                v.play().catch(() => {});
                setMuted(false);
              }}
              className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-gold text-background text-xs uppercase tracking-[0.2em] font-medium shadow-lg hover:scale-105 transition"
            >
              🔊 Ativar som
            </button>
          )}
        </div>

        <CTA sub="Próxima imersão · 21/06 às 9h" />
      </section>

      {/* 2. DOR / DIFERENCIAÇÃO */}
      <section className="py-24 px-6 border-y border-border bg-card/40">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Verdade incômoda
          </p>
          <h2 className="text-4xl md:text-6xl leading-tight">
            Não basta ser boa.
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            É preciso ter um{" "}
            <span className="text-foreground font-medium">diferencial</span> e
            construir{" "}
            <span className="text-gold-gradient italic font-semibold">
              autoridade
            </span>{" "}
            para se posicionar como referência.
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            Caso contrário, você continuará sendo mais uma, competindo por
            desconto, fazendo o que todo mundo faz, com o ticket médio que todo
            mundo cobra.
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
            <img
              src={antesDepoisPerfil}
              alt="Resultado antes e depois — perfil"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 3. OBJETIVO DA IMERSÃO */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            O que é a imersão
          </p>
          <h2 className="text-4xl md:text-6xl leading-tight">
            A técnica de rejuvenescimento mais{" "}
            <span className="text-gold-gradient italic">
              avançada, segura e lucrativa
            </span>{" "}
            do mercado.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Sem bisturi. Sem aparelhos caros. Executada em{" "}
            <span className="text-foreground font-semibold">
              30 minutos de consultório
            </span>{" "}
            , com resultado visível já na primeira sessão.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: X, t: "Sem cortes" },
              { icon: ShieldCheck, t: "Sem aparelhos caros" },
              { icon: Clock, t: "30 minutos" },
            ].map((b) => (
              <div
                key={b.t}
                className="p-6 rounded-2xl border border-gold/30 bg-card flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-sm uppercase tracking-[0.15em]">{b.t}</p>
              </div>
            ))}
          </div>

          <CTA />
        </div>
      </section>

      {/* 4. AUTORIDADE */}
      <section className="py-24 px-6 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl blur-2xl" />
            <img
              src={instructor}
              alt="Dra. Rosana Vecchi Caldas, fundadora da NatureFace"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-2xl border border-gold/30 shadow-[var(--shadow-elevated)]"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Quem te ensina
            </p>
            <h2 className="text-4xl md:text-5xl mb-2">
              Dra. Rosana Vecchi Caldas
            </h2>
            <p className="text-gold-gradient italic mb-6">
              Fundadora da NatureFace
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Referência nacional em{" "}
              <span className="text-foreground font-semibold">
                estética não cirúrgica
              </span>{" "}
              e rejuvenescimento facial avançado. Construiu uma das marcas mais
              respeitadas do segmento e formou centenas de profissionais que
              hoje são autoridade em suas regiões.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                { i: GraduationCap, t: "Especialização internacional pela Harvard University" },
                { i: Award, t: "Especialização ASA · Anatomy e cursos avançados no exterior" },
                { i: Crown, t: "Fundadora da NatureFace: marca de autoridade no setor" },
                { i: Star, t: "Forte autoridade digital e referência em rejuvenescimento facial" },
              ].map((t) => (
                <li key={t.t} className="flex items-start gap-3">
                  <t.i className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{t.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CONEXÃO EMOCIONAL */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Bastidores
          </p>
          <h2 className="text-4xl md:text-5xl leading-tight mb-10">
            "Quem sou eu para te<br />
            <span className="text-gold-gradient italic">dizer tudo isso?"</span>
          </h2>
          <div className="text-left space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Eu também já fui a profissional que olhava no espelho do
              consultório e se perguntava: "por que ela está cobrando o triplo
              do que eu cobro pelo mesmo procedimento?"
            </p>
            <p>
              Estudei fora do Brasil, Harvard, ASA, Anatomy, não por vaidade
              acadêmica. Foi para encontrar a resposta que aqui ninguém me
              dava: existe uma técnica que <span className="text-foreground">resolve</span> o
              que cirurgia, creme e procedimento nenhum estavam resolvendo.
            </p>
            <p>
              Hoje, à frente do protocol NatureFace, ensino exatamente o que eu
              queria ter aprendido 10 anos atrás, para que você não perca uma
              década descobrindo sozinha o que pode te transformar em referência
              agora.
            </p>
          </div>
          <p className="mt-10 text-2xl text-foreground italic">
            Dra. Rosana Vecchi Caldas
          </p>
        </div>
      </section>

      {/* 6. DORES DO PACIENTE FINAL → GANHO DO PROFISSIONAL */}
      <section className="py-24 px-6 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              A demanda está na sua porta
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              É isso que a cliente sente
              <br />
              <span className="text-gold-gradient italic">
                e ninguém está resolvendo.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Pálpebras caídas que envelhecem o olhar, mesmo com pele cuidada e corpo em dia",
              "Sensação de cansaço e tristeza permanente no olhar, sem motivo real",
              "Vergonha e medo de cirurgia, riscos, recuperação longa, custo alto",
              "Já tentou cremes caros e procedimentos que não entregaram resultado nenhum",
              "Procura uma alternativa segura, rápida e sem cortes, e não encontra",
              "Quer voltar a se reconhecer no espelho com um olhar jovem e descansado",
            ].map((d) => (
              <div
                key={d}
                className="p-5 rounded-2xl bg-background/60 border border-border flex items-start gap-3"
              >
                <Heart className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center p-8 rounded-2xl border-2 border-gold/40 bg-gradient-to-b from-card to-background">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Sua vantagem
            </p>
            <p className="text-2xl md:text-3xl leading-snug">
              Domine a solução que{" "}
              <span className="text-gold-gradient italic">
                creme e procedimento nenhum
              </span>{" "}
              entregou, e cobre o que ela vale.
            </p>
          </div>
        </div>
      </section>

      {/* 7. BENEFÍCIOS PARA O PROFISSIONAL */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            O que muda na sua carreira
          </p>
          <h2 className="text-4xl md:text-5xl leading-tight">
            De prestadora de serviço a{" "}
            <span className="text-gold-gradient italic">referência</span>.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: TrendingUp,
              t: "Ticket médio elevado",
              d: "Procedimento premium que se paga em poucos atendimentos.",
            },
            {
              icon: Crown,
              t: "Autoridade local",
              d: "A profissional procurada quando ninguém mais sabe resolver.",
            },
            {
              icon: Sparkles,
              t: "Diferenciação real",
              d: "Saia da guerra de preços. Ofereça o que 95% não oferece.",
            },
            {
              icon: Heart,
              t: "Fidelização",
              d: "Cliente que viu o resultado volta, e indica três amigas.",
            },
            {
              icon: ShieldCheck,
              t: "Segurança técnica",
              d: "Indicação, execução e pós-procedimento sob protocolo.",
            },
            {
              icon: Award,
              t: "Posicionamento premium",
              d: "Marca pessoal sólida, com método e nome próprio na cidade.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition">
                <b.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl mb-2">{b.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {b.d}
              </p>
            </div>
          ))}
        </div>

        <CTA />
      </section>

      {/* 8. DEPOIMENTOS */}
      <section className="py-24 px-6 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Quem já fez
            </p>
            <h2 className="text-4xl md:text-5xl">
              Profissionais que saíram do montão.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Camila R.",
                c: "Biomédica · Curitiba",
                t: '"Cobrei R$ 2500,00 na primeira aplicação depois da imersão. A cliente chorou no espelho. Recuperei o investimento em uma semana."',
              },
              {
                n: "Tatiane M.",
                c: "Esteticista · São Paulo",
                t: "Eu literalmente perdia cliente para a concorrência. Hoje tenho fila de espera para o protocolo de pálpebra. Meu posicionamento mudou.",
              },
              {
                n: "Dra. Júlia P.",
                c: "Dermato · Belo Horizonte",
                t: "O que mais me surpreendeu foi a segurança do protocolo da Dra. Rosana. Saí da imersão pronta para aplicar — sem medo.",
              },
            ].map((d) => (
              <figure
                key={d.n}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <div className="flex gap-1 text-gold mb-4">{"★★★★★"}</div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground italic">
                  "{d.t}"
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold">{d.n}</div>
                  <div className="text-xs text-muted-foreground">{d.c}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OBJEÇÕES */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Antes que você pense
            </p>
            <h2 className="text-4xl md:text-5xl">"Mas será que serve pra mim?"</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                o: "Preciso ter curso de estética avançada antes?",
                r: "Sim. A base é ter formação em estética, porém não é preciso dominar flacidez. A imersão começa do alicerce, anatomia da região periorbital, diagnóstico diferencial, e vai até a execução completa. Iniciantes e experientes terminam no mesmo nível técnico.",
              },
              {
                o: "Vou precisar comprar equipamento caro?",
                r: "Não. O protocolo da Dra. Rosana foi desenhado para usar material acessível, presente na maioria dos consultórios. Sem aparelho de R$ 80 a 400 mil.",
              },
              {
                o: "Existe demanda real por esse procedimento?",
                r: "Alta. Olhar caído é uma das três queixas estéticas que mais crescem no Brasil, e a maioria das clientes recusa cirurgia. Quem oferece a solução não cirúrgica colhe um mercado pouco disputado.",
              },
            ].map((q) => (
              <details
                key={q.o}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="font-medium text-lg">{q.o}</span>
                  <span className="w-8 h-8 shrink-0 rounded-full border border-gold/40 flex items-center justify-center text-gold group-open:rotate-45 transition">
                    <Sparkles className="w-4 h-4" />
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {q.r}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. OFERTA */}
      <section id="oferta" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto">
          <div className="mb-10 rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
            <img
              src={antesDepoisCollage}
              alt="Resultados antes e depois de pacientes da Dra. Rosana Vecchi Caldas"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Sua oportunidade
            </p>
            <h2 className="text-4xl md:text-6xl leading-tight">
              Imersão{" "}
              <span className="text-gold-gradient italic">Blefaro</span> Sem
              Corte
            </h2>
            <p className="mt-4 text-muted-foreground">
              Aula ao vivo · ~2h · direto com a Dra. Rosana Vecchi Caldas
            </p>
            <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full border-2 border-gold/50 bg-gold/10">
              <Clock className="w-5 h-5 text-gold" />
              <span className="text-sm md:text-base uppercase tracking-[0.18em] font-semibold">
                Próxima imersão: <span className="text-gold-gradient">21/06 às 9h</span>
              </span>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-gold/40 bg-card p-8 md:p-12 shadow-[var(--shadow-elevated)] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs uppercase tracking-[0.25em] font-bold flex items-center gap-2 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5" /> 21/06 · 9h · Vagas limitadas
            </div>


            <h3 className="text-2xl mb-6 mt-4">O que você vai viver:</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Encontro ao vivo de aproximadamente 2 horas com a Dra. Rosana",
                "Apresentação completa da técnica Blefaro Sem Corte",
                "Demonstração prática: como o protocolo é executado em consultório",
                "Critérios de indicação, segurança e diferenciação no mercado",
                "Sessão de perguntas e respostas ao vivo com a Dra. Rosana",
                "Como se posicionar como referência usando essa técnica",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-8">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-gold mb-2">
                  Investimento único
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl">R$</span>
                  <span className="text-7xl md:text-8xl font-semibold text-gold-gradient">
                    97
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Acesso à imersão ao vivo com a Dra. Rosana
                </p>
              </div>

              <CTA
                label="GARANTIR MINHA VAGA NA IMERSÃO"
                sub="Pagamento 100% seguro · vaga confirmada por e-mail"
                href="https://pay.kiwify.com.br/1dMXM82"
              />

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground mt-4">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold" /> 100% ao vivo
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold" /> ~2 horas
                </span>
                <span className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-gold" /> Direto com a Dra. Rosana
                </span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">
            As vagas são limitadas para garantir um encontro próximo e com
            espaço real para tirar suas dúvidas ao vivo. Quando lotar, encerra.
          </p>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl leading-tight">
            Você pode continuar sendo{" "}
            <span className="line-through text-muted-foreground">
              mais uma
            </span>
            .<br />
            Ou pode virar{" "}
            <span className="text-gold-gradient italic">referência</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            A decisão é técnica. E é sua.
          </p>
          <CTA label="GARANTIR MINHA VAGA" />
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NatureFace · Dra. Rosana Vecchi Caldas ·
        Todos os direitos reservados
      </footer>
    </main>
  );
}
