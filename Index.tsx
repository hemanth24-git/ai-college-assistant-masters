import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Globe, FileText, MessageSquare, BarChart, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import GuidedTour from "@/components/GuidedTour";

const Index = () => {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <GuidedTour open={tourOpen} onOpenChange={setTourOpen} />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container relative mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <GraduationCap className="w-4 h-4" />
                AI College Assistant for Your Masters
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Journey to
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}Global Education{" "}
                </span>
                Starts Here
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover universities, generate personalized SOPs, and manage applications
                for studying in Germany, USA, UK, and Canada — all powered by AI.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild className="shadow-lg">
                  <Link to="/auth">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" onClick={() => setTourOpen(true)}>
                  Explore Site
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Students studying abroad"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Study Abroad</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform simplifies every step of your international education journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>University Finder</CardTitle>
                <CardDescription>
                  AI recommendations for universities in Germany, USA, UK, and Canada based on your profile
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>AI SOP Generator</CardTitle>
                <CardDescription>
                  Create personalized Statements of Purpose tailored to your target universities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>EduBot Assistant</CardTitle>
                <CardDescription>
                  24/7 AI chatbot answering questions about studying abroad and admissions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Application Tracker</CardTitle>
                <CardDescription>
                  Manage deadlines, track status, and organize all your applications in one place
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Saved Universities</CardTitle>
                <CardDescription>
                  Build your shortlist and compare universities side by side
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Track your progress with visual insights and statistics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are using AI to achieve their study abroad dreams
          </p>
          <Button size="lg" asChild className="shadow-lg">
            <Link to="/auth">
              Create Free Account
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
